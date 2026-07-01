import TextField from "./TextField";
import TextArea from "./TextArea";
import MovieList from "./MovieList";
import Button from "./Button";

function SurveyForm({
  formData,
  errors,
  movies,
  onFieldChange,
  onMovieSelect,
  onSubmit,
  onReset,
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <TextField
        id="name"
        label="ชื่อ"
        value={formData.name}
        onChange={(event) => onFieldChange("name", event.target.value)}
        error={errors.name}
        placeholder="กรอกชื่อของคุณ"
      />

      <TextField
        id="email"
        label="อีเมล"
        type="email"
        value={formData.email}
        onChange={(event) => onFieldChange("email", event.target.value)}
        error={errors.email}
        placeholder="กรอกอีเมลของคุณ"
      />

      <div className="flex flex-col gap-1">
        <MovieList
          movies={movies}
          name="favorite-movie"
          selectedMovie={formData.selectedMovie}
          onSelect={onMovieSelect}
        />
        {errors.selectedMovie && (
          <p className="text-sm text-red-500">{errors.selectedMovie}</p>
        )}
      </div>

      <TextArea
        id="comment"
        label="ความคิดเห็น (ไม่บังคับ)"
        value={formData.comment}
        onChange={(event) => onFieldChange("comment", event.target.value)}
        placeholder="แชร์ความคิดเห็นเกี่ยวกับภาพยนตร์ที่คุณเลือก"
      />

      <div className="flex flex-wrap gap-3">
        <Button type="submit" variant="primary">
          ส่งแบบสำรวจ
        </Button>
        <Button type="button" variant="secondary" onClick={onReset}>
          รีเซ็ต
        </Button>
      </div>
    </form>
  );
}

export default SurveyForm;
