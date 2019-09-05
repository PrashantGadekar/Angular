import java.util.*;
import java.lang.*;

public class prog10{
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		String str1;
		str1 = input.nextLine();
		int num;
		num = input.nextInt();
		String str2;
		int str1_len = str1.length();
		str2 = str1.substring(str1_len-num,str1_len);
		System.out.print(str1);
		for(int i=0;i<num;i++){
			System.out.print(str2);
		}
	}
}