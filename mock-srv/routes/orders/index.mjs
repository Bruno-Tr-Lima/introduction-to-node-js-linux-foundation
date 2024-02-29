"use strict";

export default async function (fastify, opts) {
  fastify.get(
    "/:category",
    { websocket: true },
    async ({ socket }, request) => {
      // for (const order of fastify.realtimeOrders()) {
      //   if (socket.readyState >= socket.CLOSING) break;
      //   socket.send(order);
      // }
      for await (const order of fastify.realtimeOrders()) {
        if (socket.readyState >= socket.CLOSING) break;
        socket.send(order);
      }
    }
  )};