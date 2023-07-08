import fail from "../../images/fail.svg";

function ApiError({ apiError, isOpen, onClose }) {
  return (
    <div className={`api-error ${isOpen ? "api-error_opened" : ""}`}>
      <div className="api-error__container">
        <img
          className="api-error__result"
          src={fail}
          alt="Ошибка запроса"
        />
        <div className="api-error__text">
          {apiError}
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
