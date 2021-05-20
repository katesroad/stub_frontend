import * as React from 'react'
import { Wrapper } from './ticket.styles'
import { AppLayout, Button } from '../components/commom'
import { AiOutlineCalendar, BiShoppingBag, HiOutlineLocationMarker } from 'react-icons/all'

export default function TicketScreen() {
  return (
    <AppLayout>
      <Wrapper className='container'>
        <div className='title'>
          <div className='card'>
            <img src='/img/ticket.png'  alt='ticket'/>
          </div>
          <div className='card title-content'>
            <div className='main'>
              <div className='date'>
                <div>May</div>
                <div>20</div>
              </div>
              <div className='text'>
                RECONVENE 2021: The Event for Event Creators
              </div>
            </div>

            <div className='subtext'>
              By Arash DamanAfshan
            </div>
            <div className='func'>
              <div className='price'>$50</div>
              <Button className='buy-button'>
                <BiShoppingBag className='icon' />Buy Ticket</Button>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='article'>
            <p className='content-title'>
              About this Event
            </p>
            <div className='content-text'>
              <p>
                Thomas Rhett Akins Jr., the son of country star Rhett Akins, has earned his own spot in mainstream
                country
                with sultry singles like "It Goes Like This" and intense love ballads like "Die A Happy Man." His first
                album, It Goes Like This dropped in 2013 with Tangled Up, Life Changes and CentePoint Road following
                every
                two years after. Out of his 17 singles, 12 have reached the No. 1 spot on the Country Airplay Chart. He
                writes most of his own material and has written for other artists including Jason Aldean, Lee Brice and
                LoCash. Although he has been nominated for multiple Grammy Awards, and has yet to take home the title,
                he's been named Best Male Vocalist by the Country Music Association twice.
              </p>
              <h3 className='content-title'>Growing Up Country</h3>

              <p>
                Since his father hung around with the likes of Tim McGraw and Brooks & Dunn while he was growing up,
                Thomas Rhett would have his future relatively mapped out for him singing country music, as well.
                However,
                he decided to go to college for communications. The music bug continued to nag at him, though, and he
                dropped out when he was 20 to pursue a career in singing and songwriting.
              </p>
              <h4>Where can I purchase Thomas Rhett tickets?</h4>

              <p>
                StubHub, backed by its Fan Protect guarantee, is the safest and easiest place to find tickets to Thomas
                Rhett concerts. The latest technology ensures you get the best seats available at the most affordable
                prices.
              </p>
              <h4>What can I expect from a Thomas Rhett concert?</h4>

              <p>
                It almost feels like you're watching your best friend perform for you. Rhett spends a lot of time
                interacting with the crowd, sharing personal stories about his music and making you feel like you've
                known
                him most of your life. He gives shout-outs to his fans in the sections farther away from the stage so
                everyone feels included. In this way, Rhett's concerts have more intimate feel than other big-arena
                shows.
              </p>
              <h4>Is Thomas Rhett touring in 2019?</h4>

              <p>
                Hhe is in the midst of his Very Hot Summer tour with his dad, Rhett Akins, along with Russell Dickerson
                and Dustin Lynch. He will also be sprinkling in some performances at mega country concerts all over the
                country.
              </p>
              <h4>What is the setlist like?</h4>

              <p>
                Rhett's top hits like "Marry Me," "Get Me Some of That," "Life Changes," "T-shirt," "Star of the Show,"
                "Crash and Burn," "Make Me Wanna," "Star of the Show" and "Unforgettable" mixed in with newer and
                lesser-known singles are part of his setlist. He is known to perform some popular cover songs, even
                bringing audience members up on stage to sing along. It's when he sings alongside his father that the
                crowd electrifies, but Rhett is carries that energy throughout all of his concerts.
              </p>
              <h4>Who are the members of Thomas Rhett's band?</h4>

              <p>
                Travis Vance is on bass, Eric "EBO" Borash is on guitar and Chris Kimmerer is on drums in Thomas Rhett's
                band. Rhett himself also plays the guitar. The four play around and joke like they have known each other
                all their lives.
              </p>

            </div>
          </div>
          <div className='information'>
            <div>
              <AiOutlineCalendar className='icon' />
              <span className='category'>Date & Time</span>
              <div className='detail'>Thu, May 20, 2021, 11:30 PM –
                Sat, May 22, 2021, 12:30 AM +0430
              </div>
            </div>

            <div>
              <HiOutlineLocationMarker className='icon' />
              <span className='category'>Locations</span>
              <div className='detail'>La, Sanfrancisco, Grand Park
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </AppLayout>
  )
}
