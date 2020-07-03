import { useSelector } from 'react-redux'
import { Card, Button, Popover, Avatar } from 'antd';
import { RetweetOutlined, MessageOutlined, EllipsisOutlined, HeartOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import ButtonGroup from 'antd/lib/button/button-group';
import PostImages from './PostImages';

const PostCard = ({ post }) => {

    const id = useSelector((state) => state.user.me?.id);

    return(
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    <HeartOutlined key="heart" />,
                    <MessageOutlined key="comment" />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                <Button>수정</Button>
                                <Button type="danger">삭제</Button>
                                </>
                            ) : <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />

            </Card>
        </div>
    )
}

PostCard.propTypes = {
    post : PropTypes.shape({
        id : PropTypes.number,
        User : PropTypes.object,
        content: PropTypes.string,
        createAt : PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object)
    }).isRequired
}

export default PostCard;