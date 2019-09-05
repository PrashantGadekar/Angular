import java.util.*;
import java.lang.*;

public class prog6{
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		char p;
		p = input.next().charAt(0);
		if ((p>='a')&&(p<='z')){
			System.out.println(" Small Letter ");
		} else if ((p>='A')&&(p<='Z')){
			System.out.println(" Capital Letter ");
		} else if ((p>='0')&&(p<='9')){
			System.out.println(" Number ");
		} else{
			System.out.println(" Special Character");
		}
	}
}