import java.util.*;
import java.lang.*;

public class prog8{
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		int num = 68;
		int i =0;
		System.out.println(" Guess my Number oh Wanderer!");
		while(i!=num){
			System.out.println("");
			i = input.nextInt();
			if(i>num){
				System.out.println(" Your number is larger than mine, guess one more time");
			} else if (i<num) {
				System.out.println(" Your number is lesser than mine, guess one more time");
			}
		}

		System.out.println(" Now you may enter the Cave ");
	}
}