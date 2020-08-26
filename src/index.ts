import { getInventory } from "../clients/v2";

// 使用生成代码
getInventory(undefined).then((resp) => {
  console.log(resp.data);
});
