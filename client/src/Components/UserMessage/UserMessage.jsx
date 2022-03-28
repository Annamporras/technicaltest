import { useContext } from 'react'
import { Toast } from 'react-bootstrap'
import { MessageContext } from '../../context/userMessage.context'


const UserMessage = () => {

    const { setShowMessage, showMessage, messageInfo } = useContext(MessageContext)

    return (
        <Toast onClose={() => setShowMessage(false)} show={showMessage} delay={4000} autohide style={{ position: 'fixed', right: 10, bottom: 10 }}>
            <Toast.Header>
                <strong className="me-auto">{messageInfo.title}</strong>
            </Toast.Header>
            <Toast.Body>{messageInfo.desc}</Toast.Body>
        </Toast>
    )
}

export default UserMessage