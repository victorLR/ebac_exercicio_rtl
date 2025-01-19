import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
   
}

const Post = ({ children }: Props) => (
    <div className={styles.post}>
        
        <p className={styles['post-text']}> {children} </p>
        <PostComments children={undefined} />
    </div>
);

export default Post;