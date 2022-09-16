function Popup({ dessert, closePopup }) {
  const { title, imgUrl } = dessert
  return (
    <div className="pop-up">
      <div className="pop-up-bg" onClick={closePopup}></div>
      <div className="pop-up-content">
          <img src={imgUrl} alt="" width="600" />
          <h3>{title}</h3>
        </div>
    </div>
  )
}

export default Popup
