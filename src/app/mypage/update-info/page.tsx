"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function UpdateInfoPage() {
  const router = useRouter();

  const [original, setOriginal] = useState({
    email: "",
    real_name: "",
    nickname: "",
  });

  const [form, setForm] = useState({
    email: "",
    real_name: "",
    nickname: "",
    password: "",
  });

  //1. 사용자 정보 불러오기. 페이지 진입시 get 요청.
  //불러온 정보를 form과 original 상태에 저장.
  useEffect(() => {
    const fetchDate = async () => {
      try {
        const response = await axios.get("/user/me");
        const { email, real_name, nickname, password } = response.data;
        setOriginal({ email, real_name, nickname });
        setForm({ email, real_name, nickname, password });
      } catch (error) {
        console.log("에러", error);
        alert("유저 정보 불러오기에 실패 했습니다.");
      }
    };
    fetchDate();
  }, []);

  //2. input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //3. update handler
  //original 값이랑 비교해서 변경된 항목만 updateFields에 저장.(빈 값 제외)
  //password는 original이랑 비교할 수 없어서 `trim()!==""` 이 조건만 보고 따로 넣는 구조임! 즉, 사용자가 비밀번호를 입력한 경우에만 서버로 보내진다.
  const handleUpdate = async () => {
    const updateFields: Record<string, string> = {};

    for (const key in form) {
      const trimmed = form[key as keyof typeof form].trim();
      const isChanged = trimmed !== original[key as keyof typeof original];
      if (trimmed !== "" && (key === "password" || isChanged)) {
        updateFields[key] = trimmed;
      }
    }

    if (Object.keys(updateFields).length === 0) {
      alert("변경된 항목이 없습니다.");
      return;
    }

    try {
      await axios.patch("/user", {
        ...updateFields,
      });
      alert("수정 완료!");
      router.push("/mypage");
    } catch (error) {
      console.log("회원정보 수정 중 에러 발생 : ", error);
      alert("ERROR 수정 실패.");
    }
  };

  return (
    <div className="flex justify-center py-20 bg-[#fefdf6] min-h-screen">
      <div className="w-[340px] space-y-10">
        {["email", "real_name", "nickname"].map((field) => (
          <div key={field}>
            <label className="block mb-1 text-sm text-gray-500 capitalize">
              {field.replace("_", " ")}
            </label>
            <Input
              name={field}
              value={form[field as keyof typeof form]}
              onChange={handleChange}
              className="border-b border-gray-300 px-2 rounded-none focus-visible:ring-0"
            />
          </div>
        ))}

        <div>
          <label className="block mb-1 text-sm text-gray-500">New Password</label>
          <Input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="변경할 비밀번호 입력 해주세요."
            className="border-b border-gray-300 px-2 rounded-none focus-visible:ring-0"
          />
        </div>

        <Button
          onClick={handleUpdate}
          className="w-full h-[60px] mt-6 bg-[#222] text-white text-xl font-semibold rounded-[10px] hover:bg-[#666666] cursor-pointer"
        >
          UPDATE
        </Button>
      </div>
    </div>
  );
}
