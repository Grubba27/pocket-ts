<script lang="ts">
  import type { DB } from "../../../db";
  
  let k = "value";
  import PocketBase from "pocketbase";
  
  const pb = new PocketBase("http://127.0.0.1:8090");
  
  const onlyCanGetFromDB = <TP extends keyof DB>(keyOfDB: TP) => {
    pb.collection(keyOfDB).create()
    return {
      getOne: (recordID: string) => {
        return pb.collection(keyOfDB).getOne(recordID) as DB[TP];
      },
      topic: pb.collection(keyOfDB).subscribe,
      create: (data: DB[TP]) => pb.collection(keyOfDB).create(data) as DB[TP],
      update: (data: Partial<DB[TP]>) => pb.collection(keyOfDB).create(data),
      delete: (recordID: string) => pb.collection(keyOfDB).delete(recordID),
    };
    
  }
  const posts = onlyCanGetFromDB("posts").create({
    json: '{"test": "test"}',
    text: "test",
  });

</script>

<div>
  <button
    on:click={async () => {
      const data = {
        text: "test",
        json: '{"test": "test"}',
      };

      const record = await pb.collection("posts").create(data);
    }}>Click me
  </button
  >
</div>
