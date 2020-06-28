import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';

import { logInAction, logOutAction } from '../reducers/user';
import { useDispatch } from 'react-redux';

const UserProfile = ({}) => {

    const dispatch = useDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logOutAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">트윗<br />0</div>,
                <div key="following">팔로잉<br />0</div>,
                <div key="follower">팔로워<br />0</div>,
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>JH</Avatar>}
                title="JIHUN"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;