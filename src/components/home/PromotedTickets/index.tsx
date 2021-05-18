// eslint-disable-next-line
import { Spinner } from 'components/commom'
import * as React from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
import Swiper, { SwiperRefNode } from 'react-id-swiper'
import { Link } from 'react-router-dom'
import { Ticket } from 'types'
import { Wrapper } from './styles'

type PromotedTicket = Pick<Ticket, 'id' | 'title' | 'imgs' | 'description'>

const TicketItem: React.FC<PromotedTicket> = ({
  id,
  title,
  description,
  imgs,
}) => {
  return (
    <Link to={`/tickets/${id}`} className="ticket-item">
      <div
        css={`
          height: 28vw;
          min-height: 12.25rem;
          max-height: 20.25rem;
          background-size: cover;
          background-image: url(${imgs[0]});
        `}
      />
      <div className="desc">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </Link>
  )
}

type PromotedTicketsProps = { tickets: PromotedTicket[] }
const PromotedTickets: React.FC<PromotedTicketsProps> = ({ tickets }) => {
  const ref = React.useRef<SwiperRefNode>(null)
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false)

  React.useEffect(() => {
    let loaded = 0
    // eslint-disable-next-line
    const imgItems: any[] = []
    tickets?.forEach(({ imgs }, index) => {
      imgItems.push(new Image())
      imgItems[index].onload = () => {
        loaded += 1
        if (loaded === tickets?.length) setIsLoaded(true)
      }
      imgItems[index].src = imgs[0]
      return
    })
    return () => {
      imgItems.forEach((item) => {
        // eslint-disable-next-line
        item = null
      })
    }
  }, [tickets])

  if (!tickets || tickets?.length === 0 || !isLoaded)
    return (
      <Wrapper>
        <div className="swiper-slide loading-spinner">
          <Spinner />
        </div>
      </Wrapper>
    )

  const goNext = () => {
    if (ref?.current?.swiper !== null) {
      try {
        ref?.current?.swiper?.slideNext()
      } catch (e) {}
    }
  }
  const goPrev = () => {
    if (ref?.current?.swiper !== null) {
      try {
        ref?.current?.swiper?.slidePrev()
      } catch (e) {}
    }
  }

  const params = {
    autoHeight: true,
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
  }

  return (
    <Wrapper>
      <Swiper ref={ref} {...params} rebuildOnUpdate>
        {tickets?.map((ticket) => (
          <div key={ticket.id}>
            <TicketItem {...ticket} />
          </div>
        ))}
      </Swiper>
      <button onClick={goPrev} className="btn-prev">
        <FcPrevious />
      </button>
      <button onClick={goNext} className="btn-next">
        <FcNext />
      </button>
    </Wrapper>
  )
}

export default React.memo(PromotedTickets)
