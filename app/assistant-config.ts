export let assistantId: string = "asst_SPKeS52uVskhbbt8KtEH7K8p"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID || "";
}
