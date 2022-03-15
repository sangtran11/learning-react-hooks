import { useState, useEffect } from "react";

const course = [
  {
    id: 1,
    name: "ReactJS",
  },
  {
    id: 2,
    name: "AngularJS",
  },
  {
    id: 3,
    name: "VueJS",
  },
];
function FakeChat() {
  const [courseId, setCourse] = useState(null);
  useEffect(() => {
    const handleCustomEvent = (e) => {
      console.log(e.detail);
    };
    window.addEventListener(`course-${courseId}`, handleCustomEvent);
    return () =>
      window.removeEventListener(`course-${courseId}`, handleCustomEvent);
  }, [courseId]);

  console.log(courseId);
  return (
    <div>
      {course.map((item) => (
        <div
          key={item.id}
          onClick={() => setCourse(item.id)}
          style={{ marginTop: 10, color: courseId === item.id ? "red" : "" }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default FakeChat;
