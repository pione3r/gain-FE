"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function SignupPage() {
    const router = useRouter();
    const { signup } = useAuthStore();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        userId: "",
        email: "",
        password: "",
        passwordConfirm: "",
        birthdate: "",
        gender: "male",
        countryCode: "+82",
        phone: "",
        verificationCode: "",
        agreements: {
            all: false,
            age: false,
            terms: false,
            privacy: false,
            marketing: false,
            emailMarketing: false,
            smsMarketing: false,
        },
    });
    const [error, setError] = useState("");
    const [birthdateError, setBirthdateError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [sendingCode, setSendingCode] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [codeSent, setCodeSent] = useState(false);
    const [phoneError, setPhoneError] = useState("");

    // 인증번호 전송 버튼 타이머
    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0 && sendingCode) {
            setSendingCode(false);
        }
    }, [countdown, sendingCode]);

    // 모든 약관 동의 체크박스 처리
    useEffect(() => {
        const { age, terms, privacy, marketing, emailMarketing, smsMarketing } = formData.agreements;
        const allChecked = age && terms && privacy && marketing && emailMarketing && smsMarketing;

        if (formData.agreements.all !== allChecked) {
            setFormData((prev) => ({
                ...prev,
                agreements: {
                    ...prev.agreements,
                    all: allChecked,
                },
            }));
        }
    }, [formData.agreements]);

    // 비밀번호 확인 검증
    useEffect(() => {
        if (formData.passwordConfirm && formData.password !== formData.passwordConfirm) {
            setPasswordError("비밀번호가 일치하지 않습니다.");
        } else {
            setPasswordError("");
        }
    }, [formData.password, formData.passwordConfirm]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // 생년월일 입력 처리 - 숫자만 8자리
    const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, "");

        if (value.length <= 8) {
            setFormData((prev) => ({ ...prev, birthdate: value }));
            setBirthdateError("");
        }

        if (value.length === 8) {
            // 간단한 유효성 검사 (예: 2000년 1월 1일 ~ 2023년 12월 31일)
            const year = Number.parseInt(value.substring(0, 4));
            const month = Number.parseInt(value.substring(4, 6));
            const day = Number.parseInt(value.substring(6, 8));

            if (year < 1900 || year > 2023 || month < 1 || month > 12 || day < 1 || day > 31) {
                setBirthdateError("유효한 생년월일을 입력해주세요.");
            }
        }
    };

    const handleCheckboxChange = (name: string, checked: boolean) => {
        if (name === "all") {
            // 모두 선택 체크박스 처리
            setFormData((prev) => ({
                ...prev,
                agreements: {
                    all: checked,
                    age: checked,
                    terms: checked,
                    privacy: checked,
                    marketing: checked,
                    emailMarketing: checked,
                    smsMarketing: checked,
                },
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                agreements: {
                    ...prev.agreements,
                    [name]: checked,
                },
            }));
        }
    };

    const handleGenderChange = (gender: string) => {
        setFormData((prev) => ({ ...prev, gender }));
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        setFormData((prev) => ({ ...prev, phone: value }));

        // 유효성 검사
        if (value.length > 0 && value.length < 8) {
            setPhoneError("휴대폰 번호가 너무 짧습니다.");
        } else {
            setPhoneError("");
        }
    };

    const handleSendVerificationCode = () => {
        if (formData.phone.trim() === "" || sendingCode) return;

        if (formData.phone.length < 8) {
            setPhoneError("유효한 휴대폰 번호를 입력해주세요.");
            return;
        }

        setSendingCode(true);
        setCodeSent(true);
        setCountdown(5); // 5초 타이머 설정

        // 여기에 실제 인증번호 전송 API 호출 로직 추가
        console.log("인증번호 전송:", formData.phone);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // 필수 약관 동의 확인
        if (!formData.agreements.age || !formData.agreements.terms || !formData.agreements.privacy) {
            setError("필수 약관에 모두 동의해주세요.");
            return;
        }

        // 비밀번호 확인
        if (formData.password !== formData.passwordConfirm) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            // 실제 API 연동 시 여기에 구현
            await signup(formData);
            router.push("/login");
        } catch (err) {
            setError("회원가입에 실패했습니다. 입력 정보를 확인해주세요.");
        }
    };

    return (
        <div className="flex min-h-screen">
            <div className="flex-1 flex flex-col p-4 md:p-8 max-w-[800px] mx-auto">
                <main className="flex-1 max-w-[560px] mx-auto w-full">
                    <div className="flex items-center justify-between flex-wrap">
                        <h2 className="text-lg font-medium mb-6">소셜 간편 가입</h2>

                        <div className="flex justify-center gap-4 mb-8">
                            <button
                                type="button"
                                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#03C75A] text-white"
                                aria-label="네이버 로그인"
                            >
                                N
                            </button>
                            <button
                                type="button"
                                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FEE500] text-black"
                                aria-label="카카오 로그인"
                            >
                                K
                            </button>
                            <button
                                type="button"
                                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1877F2] text-white"
                                aria-label="페이스북 로그인"
                            >
                                f
                            </button>
                            <button
                                type="button"
                                className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-300"
                                aria-label="구글 로그인"
                            >
                                G
                            </button>
                        </div>
                    </div>

                    <div className="border-b border-orange-500 mb-6"></div>

                    <p className="text-left mb-6">회원가입하고 GAIN과 함께하세요.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && <div className="text-red-500 text-sm">{error}</div>}

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-normal mb-1">
                                    이름
                                </label>
                                <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full" />
                            </div>
                            <div>
                                <label htmlFor="userId" className="block text-sm font-normal mb-1">
                                    아이디
                                </label>
                                <Input id="userId" name="userId" type="text" required value={formData.userId} onChange={handleChange} className="w-full" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-normal mb-1">
                                이메일
                            </label>
                            <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                        placeholder="8-16자리 영문, 숫자, 특수기호 조합"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pr-10"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-400" /> : <EyeIcon className="h-5 w-5 text-gray-400" />}
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="passwordConfirm" className="block text-sm font-normal mb-1">
                                    비밀번호 확인
                                </label>
                                <div className="relative">
                                    <Input
                                        id="passwordConfirm"
                                        name="passwordConfirm"
                                        type={showPasswordConfirm ? "text" : "password"}
                                        required
                                        value={formData.passwordConfirm}
                                        onChange={handleChange}
                                        className={`w-full pr-10 ${passwordError ? "border-red-500" : ""}`}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                                    >
                                        {showPasswordConfirm ? <EyeOffIcon className="h-5 w-5 text-gray-400" /> : <EyeIcon className="h-5 w-5 text-gray-400" />}
                                    </button>
                                </div>
                            </div>
                            {passwordError && <p className="text-red-500 text-xs mt-1 md:col-span-2">{passwordError}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="birthdate" className="block text-sm font-normal mb-1">
                                    생년월일
                                </label>
                                <Input
                                    id="birthdate"
                                    name="birthdate"
                                    type="text"
                                    placeholder="20000131"
                                    required
                                    value={formData.birthdate}
                                    onChange={handleBirthdateChange}
                                    maxLength={8}
                                    inputMode="numeric"
                                    className="w-full"
                                />
                                {birthdateError && <p className="text-red-500 text-xs mt-1">{birthdateError}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-normal mb-1">성별</label>
                                <div className="flex gap-8 h-10 items-center">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="male"
                                            name="gender"
                                            checked={formData.gender === "male"}
                                            onChange={() => handleGenderChange("male")}
                                            className="mr-2"
                                        />
                                        <label htmlFor="male">남자</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="female"
                                            name="gender"
                                            checked={formData.gender === "female"}
                                            onChange={() => handleGenderChange("female")}
                                            className="mr-2"
                                        />
                                        <label htmlFor="female">여자</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                휴대폰 번호
                            </label>
                            <div className="flex gap-2">
                                <select
                                    className="w-[100px] flex-shrink-0 bg-white border border-gray-300 rounded-md px-2 py-2 text-sm"
                                    value={formData.countryCode}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, countryCode: e.target.value }))}
                                >
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                    <option value="+49">+49</option>
                                    <option value="+61">+61</option>
                                    <option value="+81">+81</option>
                                    <option value="+82">+82</option>
                                    <option value="+86">+86</option>
                                    <option value="+91">+91</option>
                                    <option value="+852">+852</option>
                                    <option value="+886">+886</option>
                                </select>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    className="flex-1"
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    inputMode="numeric"
                                />
                                <Button
                                    type="button"
                                    className="bg-[#FF7A59] hover:bg-[#FF6A49] text-white whitespace-nowrap px-4"
                                    disabled={formData.phone.trim() === "" || sendingCode}
                                    onClick={handleSendVerificationCode}
                                >
                                    인증번호 전송
                                </Button>
                            </div>
                            {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                        </div>

                        <div>
                            <label htmlFor="verificationCode" className="block text-sm font-normal mb-1">
                                인증번호
                            </label>
                            <div className="flex gap-2">
                                <Input
                                    id="verificationCode"
                                    name="verificationCode"
                                    type="text"
                                    className="flex-1"
                                    value={formData.verificationCode}
                                    onChange={handleChange}
                                />
                                <Button
                                    type="button"
                                    className="bg-[#FF7A59] hover:bg-[#FF6A49] text-white px-8"
                                    onClick={() => {
                                        // 여기에 인증번호 확인 로직 추가
                                        console.log("인증번호 확인:", formData.verificationCode);
                                    }}
                                >
                                    확인
                                </Button>
                            </div>
                        </div>

                        <div className="border-b border-orange-500 mb-6"></div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between gap-8">
                                <label htmlFor="all" className="text-sm font-medium">
                                    필수동의 항목 및 개인정보 수집 및 이용 동의(선택), 광고성 정보 수신(선택)에 모두 동의합니다.
                                </label>
                                <Checkbox
                                    id="all"
                                    checked={formData.agreements.all}
                                    onCheckedChange={(checked) => handleCheckboxChange("all", checked as boolean)}
                                />
                            </div>

                            <div className="border-t border-gray-100 pt-2"></div>

                            <div className="flex items-center justify-between gap-2">
                                <label htmlFor="age" className="text-sm">
                                    <span className="text-[#FF7A59]">[필수]</span> 만 15세 이상입니다.
                                </label>
                                <Checkbox
                                    id="age"
                                    checked={formData.agreements.age}
                                    onCheckedChange={(checked) => handleCheckboxChange("age", checked as boolean)}
                                />
                            </div>

                            <div className="flex items-center justify-between gap-2">
                                <label htmlFor="terms" className="text-sm">
                                    <span className="text-[#FF7A59]">[필수]</span> 이용약관 동의
                                </label>
                                <Checkbox
                                    id="terms"
                                    checked={formData.agreements.terms}
                                    onCheckedChange={(checked) => handleCheckboxChange("terms", checked as boolean)}
                                />
                            </div>

                            <div className="flex items-center justify-between gap-2">
                                <label htmlFor="privacy" className="text-sm">
                                    <span className="text-[#FF7A59]">[필수]</span> 개인정보 수집 및 이용 동의
                                </label>
                                <Checkbox
                                    id="privacy"
                                    checked={formData.agreements.privacy}
                                    onCheckedChange={(checked) => handleCheckboxChange("privacy", checked as boolean)}
                                />
                            </div>

                            <div className="flex items-center justify-between gap-2">
                                <label htmlFor="marketing" className="text-sm">
                                    <span className="text-gray-500">[선택]</span> 개인정보 수집 및 이용 동의
                                </label>
                                <Checkbox
                                    id="marketing"
                                    checked={formData.agreements.marketing}
                                    onCheckedChange={(checked) => handleCheckboxChange("marketing", checked as boolean)}
                                />
                            </div>

                            <div className="flex items-center justify-between gap-2">
                                <label htmlFor="emailMarketing" className="text-sm">
                                    <span className="text-gray-500">[선택]</span> 광고성 정보 이메일 수신 동의
                                </label>
                                <Checkbox
                                    id="emailMarketing"
                                    checked={formData.agreements.emailMarketing}
                                    onCheckedChange={(checked) => handleCheckboxChange("emailMarketing", checked as boolean)}
                                />
                            </div>

                            <div className="flex items-center justify-between gap-2">
                                <label htmlFor="smsMarketing" className="text-sm">
                                    <span className="text-gray-500">[선택]</span> 광고성 정보 SMS 수신 동의
                                </label>
                                <Checkbox
                                    id="smsMarketing"
                                    checked={formData.agreements.smsMarketing}
                                    onCheckedChange={(checked) => handleCheckboxChange("smsMarketing", checked as boolean)}
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full bg-[#FF7A59] hover:bg-[#FF6A49] text-white h-12 rounded-full">
                            가입하기
                        </Button>
                    </form>
                </main>
            </div>
        </div>
    );
}
