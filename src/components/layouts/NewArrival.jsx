import React from 'react'
import SingleProduct from '../SingleProduct'
import Container from '../Container'
import Flex from '../Flex'

const NewArrival = () => {
  return (
    <>
    <div className="pb-6">
        <Container>
            <Flex>
                <SingleProduct/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default NewArrival