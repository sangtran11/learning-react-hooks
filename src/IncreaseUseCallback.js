import { useCallback, useState } from "react";
import IncreaseChild from "./IncreaseChild";

/**
 * Memo check nếu có props thay đổi thì sẽ re-render lại component
 * mỗi lần handleIncrease được gọi, nó sẽ tạo ra 1 vùng nhớ mới cho function
 * và sẽ gán giá trị đó cho handleIncrease. so sánh object kiểu {} !== {}
 * vì thế mỗi lần nó sẽ re-render lại childComponent
 * useCallback sẽ kiểm tra deps, nếu deps thay đổi thì sẽ gán giá trị mới cho handleIncrease
 */
function IncreaseUseCallback() {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <p>{count}</p>
      <IncreaseChild onIncrease={handleIncrease} />
    </div>
  );
}

export default IncreaseUseCallback;
