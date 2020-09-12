import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react';

import { logOutRequestAction } from '../reducers/user';
import { useSelector, useDispatch } from 'react-redux';

const UserProfile = ({}) => {

    const dispatch = useDispatch();
    const { me, isLoggingOut } = useSelector((state) => state.user) 

    const onLogOut = useCallback(() => {
        dispatch(logOutRequestAction());
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
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={isLoggingOut}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;