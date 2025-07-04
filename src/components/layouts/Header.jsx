import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '/src/assets//logo.png'

const Header = () => {
  return (
    <>
    <div className="bg-amber-400 py-[30px]">
      <Container>
        <Flex>
          <div className="">
            <Image src={logo} alt={"logo"}/>
          </div>
          <div className=""></div>
          <div className=""></div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Header