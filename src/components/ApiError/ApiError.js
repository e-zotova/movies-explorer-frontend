import fail from "../../images/fail.svg";

function ApiError({ isOpen, onClose }) {
  return (
    <div className={`api-error ${isOpen ? "api-error_opened" : ""}`}>
      <div className="api-error__container">
        <img
          className="api-error__result"
          src={fail}
          alt="Статус регистрации"
        />
        <div className="api-error__text">
          Что-то пошло не так! Попробуйте ещё раз.
        </div>
        <button
          type="reset"
          aria-label="Закрыть"
          className="button api-error__close-button"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default ApiError;
