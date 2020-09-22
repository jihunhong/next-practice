import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditFrom';
import FollowList from '../components/FollowList';

const Profile = () => {
  const me = useSelector((state) => state.user);

  useEffect(() => {
    if( !(me && me.id)){
      Router.push('/')
    }
  }, [me && me.id ])

  if(!me){
    return null;
  }

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
