"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fetchUserInfo } from "@/services/userInfo";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface UserForm {
  email: string;
  realname: string;
  nickname: string;
  password?: string;
}

export default function UpdateInfoPage() {
  const router = useRouter();
  const { updateUser, loading } = useUpdateUser();

  const [original, setOriginal] = useState<Omit<UserForm, "password">>({
    email: "",
    realname: "",
    nickname: "",
  });

  const [form, setForm] = useState<UserForm>({
    email: "",
    realname: "",
    nickname: "",
    password: "",
  });

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const userInfo = await fetchUserInfo();
        const { email, realname, nickname } = userInfo;
        setOriginal({ email, realname, nickname });
        setForm({ email, realname, nickname, password: "" });
      } catch (error) {
        console.log("에러", error);
        alert("유저 정보 불러오기에 실패 했습니다.");
      }
    };
    fetchDate();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const updateFields: Record<string, string> = {};

    for (const key in form) {
      const value = form[key as keyof typeof form];
      const trimmed = value ? value.trim() : "";
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
      await updateUser(updateFields); // useUpdateUser 훅에서 처리
      alert("회원정보가 성공적으로 업데이트되었습니다.");
      router.push("/mypage");
    } catch (error) {
      console.error("업데이트 중 오류 발생:", error);
      alert("회원정보 업데이트에 실패했습니다.");
    }
  };

  return (
    <div className="flex justify-center py-20 bg-[#fefdf6] min-h-screen">
      <div className="w-[340px] space-y-10">
        {["email", "realname", "nickname"].map((field) => (
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
          className={`w-full h-[60px] mt-6 bg-[#222] text-white text-xl font-semibold rounded-[10px] hover:bg-[#666666] cursor-pointer ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "업데이트 중..." : "UPDATE"}
        </Button>
      </div>
    </div>
  );
}
