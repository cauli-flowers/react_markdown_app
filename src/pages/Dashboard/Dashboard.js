import React, {Component} from 'react';
import {Container} from 'flux/utils';
import DashboardStore from '../../stores/dashboardStore';

class Dashboard extends Component {
    static getStores() {
        return [DashboardStore];
    }

    static calculateState() {
        return dashboardStore.getState();
    }

    render() {
        const {notes, selectedNoteId} = this.state;
        const selectedNote = notes.find(note => {
            return selectedNoteId === note.id;
        });

        return (
            <div className="page-Dashboard">
                <div className="page-Dashboard-list">
                    <div className="page-Dashboard-listHeader">
                        <Button onClick={NoteAction.create}>
                            New Note
                        </Button>
                    </div>
                    <NoteList
                        notes={notes}
                        selectedNoteId={selectedNoteId} />
                </div>
                <div className="page-Dashboard-main">
                    <NoteEditor note={selectedNote} />
                </div>
            </div>
        );
    }
}

export default Container.create(Dashboard);
