import Button from "./Button";

function SurveySummary({ formData, onStartNew }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-lg border border-violet-200 bg-violet-50 p-4">
        <h2 className="text-lg font-semibold text-violet-900">
          สรุปผลแบบสำรวจ
        </h2>
        <p className="mt-1 text-sm text-violet-700">
          ขอบคุณที่เข้าร่วมแบบสำรวจความชอบภาพยนตร์
        </p>
      </div>

      <dl className="flex flex-col gap-4">
        <div>
          <dt className="text-sm font-medium text-slate-500">ชื่อ</dt>
          <dd className="mt-1 text-base text-slate-900">{formData.name}</dd>
        </div>

        <div>
          <dt className="text-sm font-medium text-slate-500">อีเมล</dt>
          <dd className="mt-1 text-base text-slate-900">{formData.email}</dd>
        </div>

        <div>
          <dt className="text-sm font-medium text-slate-500">
            ภาพยนตร์ที่เลือก
          </dt>
          <dd className="mt-1 text-base text-slate-900">
            {formData.selectedMovie}
          </dd>
        </div>

        {formData.comment.trim() && (
          <div>
            <dt className="text-sm font-medium text-slate-500">ความคิดเห็น</dt>
            <dd className="mt-1 whitespace-pre-wrap text-base text-slate-900">
              {formData.comment}
            </dd>
          </div>
        )}
      </dl>

      <Button type="button" variant="primary" onClick={onStartNew}>
        เริ่มทำแบบสำรวจใหม่
      </Button>
    </div>
  );
}

export default SurveySummary;
