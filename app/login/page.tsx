"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // 실제 API 연동 시 여기에 구현
      await login(formData.email, formData.password);
      router.push("/dashboard");
    } catch (err) {
      setError("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col p-4 md:p-8">
        <main className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          <h1 className="text-lg font-medium mb-6">글로벌 예술 네트워킹 GAIN에 로그인하세요.</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-red-500 text-sm">{error}</div>}

            <div>
              <label htmlFor="email" className="block text-sm font-normal mb-1">
                이메일
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="abcd@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-normal mb-1">
                비밀번호
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="영문, 숫자, 특수문자 8-16자리"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <Link href="/forgot-password" className="text-xs text-gray-500">
                  비밀번호를 잊어버리셨나요?
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => handleCheckboxChange(checked as boolean)}
              />
              <label htmlFor="rememberMe" className="text-sm">
                자동 로그인 설정
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#FF7A59] hover:bg-[#FF6A49] text-white h-12 rounded-md"
            >
              로그인 하기
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">또는 소셜 로그인하기</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                className="w-full h-12 rounded-md bg-[#03C75A] text-white flex items-center justify-center"
              >
                <span className="font-bold mr-2">N</span> 네이버 계정으로 계속하기
              </button>
              <button
                type="button"
                className="w-full h-12 rounded-md bg-[#FEE500] text-black flex items-center justify-center"
              >
                <span className="font-bold mr-2">K</span> 카카오 계정으로 계속하기
              </button>
              <button
                type="button"
                className="w-full h-12 rounded-md bg-[#1877F2] text-white flex items-center justify-center"
              >
                <span className="font-bold mr-2">f</span> 페이스북 계정으로 계속하기
              </button>
              <button
                type="button"
                className="w-full h-12 rounded-md bg-white border border-gray-300 text-black flex items-center justify-center"
              >
                <span className="font-bold mr-2">G</span> 구글 계정으로 계속하기
              </button>
            </div>

            <div className="text-center mt-6">
              <p className="text-xs text-gray-600">
                아직 GAIN 회원이 아니신가요?{" "}
                <Link href="/signup" className="font-bold hover:text-[#FF7A59]">
                  회원가입하기
                </Link>
                <br />
                GAIN은 회원님의 개인정보 보호를 위해 로그인 정보를 안전하게 암호화하여 전송합니다.
              </p>
            </div>
          </form>
        </main>
      </div>

      <div className="hidden md:block md:w-1/2">
        <div className="h-full flex flex-col p-8">
          <div className="flex-1 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-4">대한민국 No.1 AI 멘토링 플랫폼</h2>
            <div className="mb-[132px] text-center text-gray-600">
              <p>GAIN에 오신 것을 환영합니다.</p>
              <p>유학, 해외 취업, 국내 취업까지.</p>
              <p>당신의 커리어 여정에 필요한 멘토링을 GAIN이 함께합니다.</p>
            </div>
            <Image
              src="/login-image.png"
              alt="멘토링 이미지"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
