import java.util.*;
import java.lang.*;

public class prog9{
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		String str1,str2="";
		str1 = input.nextLine();
		int i, j;
		int len = str1.length();
		j = len -1;
		System.out.println(len);
		for(i=j;i>=0; i--){
			     
				str2 = str2+ str1.charAt(i);
			// System.out.println(1);
			
		}

		System.out.println(str2);
	}
}