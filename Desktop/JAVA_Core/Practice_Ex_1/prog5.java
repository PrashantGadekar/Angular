import java.util.*;
import java.lang.*;

public class prog5{

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		int sum =0;
		char d = 'y';
		while(d==('y')|| (d==('Y'))){
			sum = sum + input.nextInt();
			System.out.println(" Press Y to give more numbers or any key to exit");
			d = input.next().charAt(0);
		} 

		System.out.println(" The sum of numbers is " + sum);
	}
}