class Abhi
{
	public static void m1()
	{
		System.out.println("abhilipsa");	
	}
}
	class B extends Abhi
	{
	public static void m2()	
	 {
		System.out.println("padmini");
	 }
	}
	class C extends Abhi
	{
		public static void m3()
		{
			System.out.println("arati");
		}}
		class Demo
		{
			public static void main(String[] args)
			{
				Abhi.m1();
				B.m1();
				B.m2();
				C.m1();
				C.m3();
			}}
