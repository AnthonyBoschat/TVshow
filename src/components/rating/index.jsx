import s from "./style.module.scss";

const emptyColor = "rgba(255, 255, 255, 0.3)"
const fullColor = "white"

const StarIcon = ({ type }) => {

    if (type === 'half') {
      return (
        <span className={s.star} style={{ position: 'relative'}}>
          <span style={{ color: emptyColor }}>★</span>
          <span
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '50%',
              overflow: 'hidden',
              color: fullColor
            }}
          >
            ★
          </span>
        </span>
      )
    }

    const color = type === 'full' ? fullColor : emptyColor
    
    return (
      <span className={s.star} style={{ color:color }}>
        ★
      </span>
    )
  }

export function Rating({rate}){

    const by5Rate = (rate / 2).toFixed(1)

    const getStarType = (starIndex) => {
        if (by5Rate >= starIndex) {
            return 'full'
        } else if (by5Rate > starIndex - 1) {
            return 'half'
        }
        return 'empty'
    }

    


     return (
        <div className={s.rate_container}>
            <div className={s.star_container}>
                {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon
                        key={index}
                        type={getStarType(index + 1)}
                    />
                ))}
            </div>

            <span className={s.rate}>
                {by5Rate}/5.0
            </span>
        </div>
    )
}