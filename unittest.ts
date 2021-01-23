import { assertEquals, assertStrictEquals } from 'https://deno.land/std/testing/asserts.ts';

Deno.test({
  name: "testing example",
  fn(): void {
    const a = { hello: "world" };
    const b = { hello: "world" };
    assertEquals("world", "world");
    assertEquals(a, b);
    // assertStrictEquals(a, b);
  },
});