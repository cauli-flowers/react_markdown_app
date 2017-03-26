import {dispatch} from '../dispatcher';
import NoteAPIClient from '../service/NoteAPIClient';

export default {
    create({title, body}) {
        NoteAPIClient.createNote({title, body})
            .then(note => {
                dispatch({type: 'note/create', note});
            });
    }
}
