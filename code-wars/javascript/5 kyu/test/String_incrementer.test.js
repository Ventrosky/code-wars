Test.assertEquals(incrementString("foobar000"), "foobar001");
Test.assertEquals(incrementString("foobar999"), "foobar1000");
Test.assertEquals(incrementString("foobar00999"), "foobar01000");
Test.assertEquals(incrementString("foo"), "foo1");
Test.assertEquals(incrementString("foobar001"), "foobar002");
Test.assertEquals(incrementString("foobar1"), "foobar2");
Test.assertEquals(incrementString("1"), "2");
Test.assertEquals(incrementString("009"), "010");
