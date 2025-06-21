import { post, host, get } from "./requester.js";
import userUtil from "./userUtil.js";


async function isOwner(ctx) {
  const id = ctx.params.id;
  const data=await get(`${host}/data/tattoos/${id}`)

  return id === data._ownerId;
}

function haveLoggedUser() {
  return !!userUtil.getToken();
}

async function likeTattoo(ctx) {
  const id=ctx.params.id
  const data = { tattooId:id  }

  try {
    const result = await post(`${host}/data/likes`, data);
    
    return result;
  } catch (err) {
    alert(err.message);
  }
}

async function totalLikes(ctx) {
  const tattooId = ctx.params.id;
  try {
    const result = await get(
      host +
        "/data/likes?where=tattooId%3D%22" +
        tattooId +
        "%22&distinct=_ownerId&count"
    );
    
    return result
  } catch (err) {
    alert(err.message);
  }
}

async function isAlreadyLiked(ctx) {
  const tattooId = ctx.params.id;
  const userId =userUtil.getUserId()

  try {
    const result = await get(
      host +
        "/data/likes?where=tattooId%3D%22"+tattooId+
        "%22%20and%20_ownerId%3D%22" +
        userId +
        "%22&count"
    );
    return!!result
  } catch (err) {
    alert(err.message);
  }
}

const likeUtils = { isOwner, isAlreadyLiked, totalLikes, haveLoggedUser, likeTattoo };
export default likeUtils;
