import React from 'react'


const CanvasContext = React.createContext()


function CanvasProvider(props) {

    return(
        <CanvasContext.Provider
            value={{

            }}>
            {props.children}
        </CanvasContext.Provider>
    )
}

export default CanvasProvider

export const withCanvas = C => props => (
    <CanvasContext.Consumer>
        {value => <C {...value} {...props} />}
    </CanvasContext.Consumer>
)