import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css'; 

import Comment from '../../models/Comment';  

type Props = {
    children: React.ReactNode; 
}

const Post = ({ children }: Props) => {
    const [coments, setComents] = useState<Comment[]>([]);
    const [tempComent, setTempComent] = useState('');

    function handleAddComent(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComent = new Comment(coments.length, tempComent);
        setTempComent('');
        setComents([...coments, newComent]);
    }

    return (
        <div>
            <p className={styles['post-text']}>{children}</p>
            <ul className={styles['post-coments']}>
                {coments.map(({ comment, id }) => (
                    <li className={styles['post-comment']} key={id}>
                        <p className={styles['post-comment-content']}>
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComent} className={styles['post-coments-form']} data-testid="form">
                <textarea 
                    value={tempComent} 
                    onChange={e => setTempComent(e.target.value)} 
                    required 
                    className={styles['post-comments-form-textarea']} 
                    data-testid="textarea"
                />
                <button type="submit" className={styles['post-comments-form-button']}>
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default Post;
