//Todos안에 사용될 TodoItem
const TodoItem = ({ todo, onToggle, onRemove }) => {
  // 안에서 실행될 내용
  // todo(할일 목록), onToggle(체크박스),onRemove(삭제)
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

// 내보낼 Todos
const Todos = ({
  input, // input에 입력되는 텍스트
  todos, // 할일 목록이 들어가 있는 객체
  onChangeInput, // 인풋안의 값을 가져오는 메서드
  onInsert, // 가져온 값을 todo목록에 추가
  onToggle, //todoItem에 전달해줄 값
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit">등록</button>
      </form>
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default Todos;
