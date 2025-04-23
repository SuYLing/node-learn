import redis from "redis"
// 1. create a connect of redis
const client = redis.createClient({
  url: "redis://localhost:6379",
})

async function testRedisConnection() {
  try {
    await client.connect()
    console.log("connect redis success")
    await client.set("key", "43124312412")
  } catch (error) {
    console.error(error)
  } finally {
    const value = await client.get("key")
    console.log(value)
    // const delectCount = await client.del("key")
    // console.log(delectCount)
    await client.quit()
  }
}
testRedisConnection()
