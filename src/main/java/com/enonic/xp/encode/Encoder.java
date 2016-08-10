package com.enonic.xp.encode;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

/**
 * Created by Michael Lazell on 8/10/16.
 */
public class Encoder
{

    public String base64( String input, String charEncoding ) throws UnsupportedEncodingException {
        final byte[] bytes = input.getBytes( charEncoding );
        return Base64.getEncoder().encodeToString( bytes );
    }

    public String hash( String input, String algorithm, String encoding ) throws UnsupportedEncodingException, NoSuchAlgorithmException
    {
        final byte[] bytes = input.getBytes( encoding );
        return hash( bytes, algorithm);
    }

    public String hash( byte[] bytes, String algorithm) throws NoSuchAlgorithmException
    {
        return toHex( MessageDigest.getInstance( algorithm ).digest( bytes ) );
    }

    public static String toHex( byte[] bytes )
    {
        BigInteger bi = new BigInteger( 1, bytes );
        return String.format( "%0" + ( bytes.length << 1 ) + "x", bi );
    }

}