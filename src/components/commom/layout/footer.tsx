import * as React from 'react'
import Logo from '../Logo'
import { Content } from '../styled'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Wrapper, Row } from './footer.styles'

export const Footer = () => (
  <Wrapper>
    <Content className="content">
      <Row className="row row-lorem">
        <Logo className="logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </Row>
      <Row className="row row-links">
        <div className="row">
          <h4>tickety</h4>
          <ul>
            <li>
              <Link to="#">marketing</Link>
            </li>
            <li>
              <Link to="#">campaigns</Link>
            </li>
          </ul>
        </div>
        <Row className="row">
          <h4>about</h4>
          <ul>
            <li>
              <Link to="#">our story</Link>
            </li>
            <li>
              <Link to="#">benifits</Link>
            </li>
          </ul>
        </Row>
        <Row className="row row-socials">
          <h4>follow us</h4>
          <ul>
            <li>
              <Link to="#">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </Row>
      </Row>
    </Content>
    <Content>
      <p className="copyright">
        Copyright © 2020. LogoIpsum. All rights reserved.
      </p>
    </Content>
  </Wrapper>
)
