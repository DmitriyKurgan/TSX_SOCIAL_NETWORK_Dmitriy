import React from 'react';
import {inspect} from 'util';
import styles from './Description.module.css';


type DescriptionPropsType={
    usersCharacteristics: Array<UserInfoType>;
}
export type UserInfoType= {
    id: number;
    name: string;
    lastName: string;
    education: string;
    profession: string;
    knowledges: string;
    status: string;
}

export const Description = (props:DescriptionPropsType) => {
    return (
        <div className={styles.description_wrapper}>
            <div className={styles.buttons_block}>
                <div className={styles.top_menu}>
                    <button>Likes</button>
                    <button>Followers</button>
                    <button>Info</button>
                </div>
                <div className={styles.add_status_block}>
                    <label>Add status</label>
                    <input placeholder="Write your status..."/>
                </div>
                <div className={styles.search_friends_block}>
                    <label>Search friend</label>
                    <input placeholder="Search your friend..."/>
                </div>
                <div className={styles.search_users_block}>
                    <label>Search user</label>
                    <input placeholder="Search any user..."/>
                </div>
            </div>
            <div className={styles.portfolio_block}>
                <p>Name: {props.usersCharacteristics[0].name}</p>
                <p>Lastname: {props.usersCharacteristics[0].lastName}</p>
                <p>Education: {props.usersCharacteristics[0].education}</p>
                <p>Profession: {props.usersCharacteristics[0].profession}</p>
                <p>Knowledges: {props.usersCharacteristics[0].knowledges}</p>
            </div>
            <div className={styles.add_post_wrapper}>
                <div className={styles.add_post_block}>
                    <h2>My posts:</h2>
                    <textarea placeholder="Write you post..."/>
                </div>
                <button className={styles.add_post_button}>Add post</button>
            </div>
        </div>
    );
};