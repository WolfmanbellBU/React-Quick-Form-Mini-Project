import { useState } from "react";
import { movies } from "./constants/movies";
import { validateSurveyForm } from "./utils/validation";
import SurveyForm from "./components/SurveyForm";
import SurveySummary from "./components/SurveySummary";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  selectedMovie: "",
  comment: "",
};

function App() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFieldChange = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handleMovieSelect = (movieTitle) => {
    setFormData((previous) => ({ ...previous, selectedMovie: movieTitle }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateSurveyForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setIsSubmitted(false);
  };

  const handleStartNew = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 px-4 py-10">
      <main className="mx-auto w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            แบบสำรวจความชอบภาพยนตร์
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            กรอกข้อมูลและเลือกภาพยนตร์ที่คุณชอบ
          </p>
        </header>

        {isSubmitted ? (
          <SurveySummary formData={formData} onStartNew={handleStartNew} />
        ) : (
          <SurveyForm
            formData={formData}
            errors={errors}
            movies={movies}
            onFieldChange={handleFieldChange}
            onMovieSelect={handleMovieSelect}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
}

export default App;
