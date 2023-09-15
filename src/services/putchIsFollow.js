import axios from 'axios';

export function putchIsFollow(
  setError,
  setIsLoading,
  setData,
  followers,
  isFollow,
  query,
  _id
) {
  setIsLoading(true);

  axios
    .patch(`users/${_id}/follow`, {
      isFollow: !isFollow,
      followers: isFollow ? followers - 1 : followers + 1,
    })
    .then(res => {
      const { isFollow: isFollowRes, followers: followersRes } = res.data;

      if (query !== null) {
        setData(prev => {
          return [...prev.filter(tweet => tweet._id !== _id)];
        });
        return;
      } else {
        setData(prev => {
          return [
            ...prev.map(user => {
              if (user._id === _id) {
                return {
                  ...user,
                  isFollow: isFollowRes,
                  followers: followersRes,
                };
              } else {
                return user;
              }
            }),
          ];
        });
      }
    })
    .catch(error => {
      setError(error.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
}
