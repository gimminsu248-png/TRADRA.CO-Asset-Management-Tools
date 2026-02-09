import React from 'react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

export default function ContactUs() {
    return (
        <div className="container py-12 max-w-2xl">
            <h1 className="text-center mb-8">문의하기 (Contact Us)</h1>
            <Card title="메시지 보내기">
                <p className="text-sm text-secondary mb-6">서비스 개선 제안, 광고 문의 또는 기술적 지원이 필요하시면 아래 폼을 통해 연락해 주세요.</p>
                <form className="space-y-4">
                    <Input label="성함 / 닉네임" placeholder="홍길동" />
                    <Input label="이메일 주소" type="email" placeholder="example@email.com" />
                    <div className="input-field">
                        <label className="input-label">문의 내용</label>
                        <textarea className="input-control" rows={5} placeholder="문의하실 내용을 상세히 적어주세요."></textarea>
                    </div>
                    <Button className="w-full">메시지 전송</Button>
                </form>
            </Card>

            <div className="mt-8 text-center text-sm text-secondary">
                <p>📧 이메일: support@tradra.co</p>
                <p>빠른 시일 내에 답변 드리도록 하겠습니다.</p>
            </div>
        </div>
    );
}
