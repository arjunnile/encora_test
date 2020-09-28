import React, { Component } from 'react';
import HeaderComponent from './Header';
import './NotesPage.scss';

const notesList = [
    {
        id: 1,
        title: 'abc',
        body: 'abchhdhdbfbfhdhdfdf jfdjhfd fdhjhdjf dhjdhfjd djhfd'
    },
    {
        id: 2,
        title: 'xyz',
        body: 'abchhdhdbfbfhdhdfdf jfdjhfd fdhjhdjf dhjdhfjd djhfd'
    },
    {
        id: 3,
        title: 'pqr',
        body: 'abchhdhdbfbfhdhdfdf jfdjhfd fdhjhdjf dhjdhfjd djhfd'
    },
    {
        id: 4,
        title: 'qwerty',
        body: 'abchhdhdbfbfhdhdfdf jfdjhfd fdhjhdjf dhjdhfjd djhfd'
    },
    {
        id: 5,
        title: 'mnbvc',
        body: 'abchhdhdbfbfhdhdfdf jfdjhfd fdhjhdindexindexjf dhjdhfjd djhfd'
    }
];
class NotesComponent extends Component {
    state = {
        notesList: [],
        title: '',
        body: ''
    }

    componentDidMount() {
        this.setState({ notesList: notesList });
    }

    onAddNote = () => {
        this.setState({
            title: '',
            body: ''
        })
    }

    handleNoteFields = (event) => { // Handle on change event of username and password field.
        let previousStateValues = this.state;
        previousStateValues[event.target.name] = event.target.value;

        this.setState({ previousStateValues });
    }

    onSaveNote = () => {
        if (this.state.title && this.state.body) {
            let notesList = this.state.notesList;

            let obj = {
                title: this.state.title,
                body: this.state.body
            };

            notesList.push(obj);

            for (let key in notesList)
                notesList[key].id = key + 1

            this.setState({ notesList, title: '', body: '' });
        }
        else {
        }
    }

    onCancelNote = (id) => {
        let notesList = this.state.notesList;
        for (let key in notesList) {
            if (notesList[key].id === id)
                notesList.splice(key, 1);
        }

        this.setState({ notesList });
    }

    render() {
        return (
            <>
                <HeaderComponent />
                <div className="row h-100">

                    <div className="col-sm-4 h-100 notes-list-cs">
                        <div className="left-list-box">
                            {this.state.notesList.map((note, index) => (
                                <div key={index} className="list-box row">
                                    <div className="title-cs col-10">{note.title}</div>
                                    <div className="col-2">
                                        <span className="close-btn" onClick={() => this.onCancelNote(note.id)}></span>
                                    </div>
                                    <div className="body-cs col-10">{note.body}</div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="col-sm-8 add-note-box">
                        <div className="row">
                            <div className="col-12 add-note-btn">
                                <button className="btn" onClick={this.onAddNote}>
                                    <span className="glyphicon glyphicon-plus">+ </span>Add Note
                            </button>
                            </div>

                            <div className="col-12 note-form-box">
                                <div>
                                    <label className="label-cs">Title : </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.handleNoteFields}
                                    ></input>
                                </div>

                                <div>
                                    <label className="label-cs">Body : </label>
                                    <textarea
                                        className="form-control"
                                        rows="10"
                                        name="body"
                                        value={this.state.body}
                                        onChange={this.handleNoteFields}
                                    ></textarea>
                                </div>

                                <div>
                                    <button className="btn save-note-btn" onClick={this.onSaveNote}>Save</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default NotesComponent;