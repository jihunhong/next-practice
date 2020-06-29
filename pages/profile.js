import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditFrom';
import FollowList from '../components/FollowList';

const Profile = () => {

    const followerList = [{nickname : '지훈'}, {nickname : '채원'}];
    const followingList = [{nickname : '지훈'}, {nickname : '채원'}];

    return(
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={followingList}/>
            <FollowList header="팔로워 목록" data={followerList}/>
        </AppLayout>
        </>
    )
}

export default Profile;