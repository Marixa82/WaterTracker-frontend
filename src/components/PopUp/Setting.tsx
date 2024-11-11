interface SettingProps {
  onClose: () => void;
}

export const Setting: React.FC<SettingProps> = ({ onClose }) =>{
  return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Setting
          </h1>
          <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>
          <div className="modal-body">
            {/* Тут ви можете додати контент модального вікна */}
            Налаштування користувача
          </div>
          <div className="modal-footer">
            
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

 