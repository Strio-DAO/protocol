import Form from 'react-bootstrap/Form'

const IssueToken = () => {
    return (  
        <div className="IssueToken">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Owner</Form.Label>
                    <Form.Control type="text" placeholder="Owner address" />
                </Form.Group>
            </Form>
        </div>
    );
}
 
export default IssueToken;