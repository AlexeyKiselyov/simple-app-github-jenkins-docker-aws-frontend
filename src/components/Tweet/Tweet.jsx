import { commaFollowersFunc } from '../../utils';
import { putchIsFollow } from '../../services/putchIsFollow.js';

import {
  Wrapper,
  DecorBlockLine,
  DecorBlockCircle,
  AvatarWrapper,
  TweetsParagragh,
  FollowersParagragh,
  FollowBtn,
} from './Tweet.styled.js';

export const Tweet = ({ data, setData, query, setIsLoading, setError }) => {
  const { _id, tweets, followers, avatar, isFollow } = data;

  const followBtnColor = isFollow ? 'active' : 'basic';

  const onFolowBtnClick = () => {
    putchIsFollow(
      setError,
      setIsLoading,
      setData,
      followers,
      isFollow,
      query,
      _id
    );
  };

  return (
    <Wrapper>
      <DecorBlockLine />
      <DecorBlockCircle />
      <AvatarWrapper url={avatar} />
      <TweetsParagragh>{tweets} Tweets</TweetsParagragh>
      <FollowersParagragh>
        {commaFollowersFunc(followers)} Followers
      </FollowersParagragh>
      <FollowBtn type="button" onClick={onFolowBtnClick} color={followBtnColor}>
        {isFollow ? 'Following' : 'Follow'}
      </FollowBtn>
    </Wrapper>
  );
};
