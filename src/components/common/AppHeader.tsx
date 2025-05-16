"use client";
import { Fragment, memo, useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { CircleUserRound, SearchIcon } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DialogWrapper from "./modal/DialogWrapper";
import SearchModal from "./modal/SearchModal";
import { handleApi } from "@/utils/handleApi";
import { fetchCurrentUser, logout } from "@/services/login";
import ModalRanking from "./modal/RankingModal";
import { useLogin, useUser } from "@/store/store";
import { useRouter } from "next/navigation";
import LinearProgress from "./LinearProgress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

// Navigation menu items
const navItems = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "New",
    route: "/new",
  },
  {
    title: "Ranking",
    route: "/ranking",
  },
  {
    title: "Write",
    route: "/write",
  },
];

function AppHeader({ isSticky }: { isSticky?: boolean }) {
  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const router = useRouter();

  const { isLogin, toggleLogin } = useLogin();
  const { setUserInfo, deleteUserInfo } = useUser();

  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const checkLogin = useCallback(async () => {
    const { data } = await handleApi(() => fetchCurrentUser());
    console.log(data);
    if (data) setUserInfo(data);
  }, [isLogin]);

  // 로그인 상태가 바뀌면 유저 정보를 받아온 후 전역으로 관리
  useEffect(() => {
    checkLogin();
  }, []);

  const executeLogout = () => {
    toggleLogin(false); // 로그인 상태 변경
    deleteUserInfo(); // 사용자 정보 초기화
    handleApi(() => logout());
    toast.success("로그아웃 되었습니다.");
    router.push("/"); // 홈으로 리다이렉트
  };

  return (
    <Fragment>
      {/* Header with navigation */}
      <header className={`${isSticky && "sticky"} top-0 z-10 w-full bg-[#fefdf6] shadow-md`}>
        <div className="container mx-auto px-4 py-6 flex flex-col items-center">
          {/* Logo */}
          <h1 className="font-['Julius_Sans_One',Helvetica] text-5xl text-black mb-6">UUSJ</h1>

          {/* Navigation */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item) => {
                if (item.title === "Ranking") {
                  return (
                    <Dialog key="Ranking" open={isRankingOpen} onOpenChange={setIsRankingOpen}>
                      <DialogTrigger asChild>
                        <NavigationMenuItem>
                          <div className="cursor-pointer font-['Julius_Sans_One',Helvetica] text-2xl text-black hover:text-gray-600 transition-colors">
                            {item.title}
                          </div>
                        </NavigationMenuItem>
                      </DialogTrigger>

                      <ModalRanking open={isRankingOpen} />
                    </Dialog>
                  );
                }

                // 다른 메뉴는 기존처럼 링크 유지
                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      className="font-['Julius_Sans_One',Helvetica] text-2xl text-black hover:text-gray-600 transition-colors"
                      href={item.route}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Login button and search icon */}
          <div className="absolute right-8 top-6 flex items-center gap-4">
            {isLogin ? (
              <>
                <Button
                  variant="link"
                  className="font-['Julius_Sans_One',Helvetica] text-1xl text-black p-0 cursor-pointer"
                  onClick={() => setShowLogoutDialog(true)}
                >
                  Logout
                </Button>
                <Button
                  variant="link"
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => router.push("/mypage")}
                >
                  <CircleUserRound strokeWidth={2} className="size-[25px] text-[#4c4528]" />
                </Button>
              </>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="link"
                    className="font-['Julius_Sans_One',Helvetica] text-1xl text-black p-0 cursor-pointer"
                  >
                    Login
                  </Button>
                </DialogTrigger>
                <DialogWrapper />
              </Dialog>
            )}

            {isSticky && (
              <Dialog modal={false}>
                <DialogTrigger>
                  <SearchIcon className="w-10 h-10 cursor-pointer" />
                </DialogTrigger>
                <SearchModal />
              </Dialog>
            )}
          </div>
        </div>
      </header>
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>정말 로그아웃 하시겠어요?</AlertDialogTitle>
            <AlertDialogDescription>
              로그아웃 시 다시 로그인해야 이용할 수 있어요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={executeLogout}>확인</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <LinearProgress colorClassName="bg-[black]" />
    </Fragment>
  );
}

export default memo(AppHeader);
