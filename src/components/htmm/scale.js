import React, {useState, useRef} from "react";
import { Scale } from "@tonaljs/tonal";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./scale.css"
export default function ScalePage() {
    const scales = Scale.names()
    const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const [selectedScale, setScale] = useState()
    const [selectedKey, setKey] = useState('A')
    const [scaleNotes, setNotes] = useState()
    const onSubmit = (e) => {
        e.preventDefault();
        let scale = Scale.get(selectedKey.toLowerCase() + " " + selectedScale)
        setNotes(scale.notes)

    }
    return(<Container>
        <h1>Piano Scales</h1>
        <Form onSubmit={(e) => onSubmit(e)}>
            <Row>
                <Col>
                <Dropdown>
                    <Form.Group>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        Scales
                    </Dropdown.Toggle>
                    </Form.Group>
                    <Form.Group>
                    <Dropdown.Menu  as={CustomMenu} className="dropdown">
                        {scales.map((scale) => (
                            <Dropdown.Item key={scale} onClick={() => setScale(scale)}>{scale}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                    {selectedScale ? <span>{selectedScale}</span>: <span/>}
                    </Form.Group>
                </Dropdown>
                </Col>
                <Col>
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Key</Form.Label>
                <Form.Control as="select" custom required >
                    {notes.map((note) => (
                        <option key={note} onClick={() => setKey(note)}>{note}</option>
                    ))}

                </Form.Control>
            </Form.Group>
                </Col>
            </Row>
            {selectedScale ? <Button type='submit'>Get</Button>:<span>Chose Scale</span>}
        </Form>
        {scaleNotes ? <NoteDisplay notes={scaleNotes}/>:<span>None</span>}

    </Container>)
}
// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        &#x25bc;
    </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto "
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

const NoteDisplay = ({notes}) => {

    return(<div>
        <h2>Notes</h2>
        {notes.map((note) => (
            <span key={note} className="p-1 font-weight-bolder">{note}</span>
        ))}

    </div>)
}
